import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSky = jest.fn();
const sendMailSky = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSky },
    { sendMail: sendMailSky },
);

describe('Submit feedback', () => {
    it('should be able to submit a feedback', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'Example comment',
            screenshot: 'data:image/png;base64,sadjklhfdsjklhfhedskjfhdjkshfkjsd',
        })).resolves.not.toThrow();

        expect(createFeedbackSky).toHaveBeenCalled();
        expect(sendMailSky).toHaveBeenCalled();
    });

    it('should not be able to submit feedback without type', async () => {
        await expect(submitFeedback.execute({
            type: '',
            comment: 'Example comment',
            screenshot: 'data:image/png;base64,sadjklhfdsjklhfhedskjfhdjkshfkjsd',
        })).rejects.toThrow();
    });

    it('should not be able to submit feedback without comment', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64,sadjklhfdsjklhfhedskjfhdjkshfkjsd',
        })).rejects.toThrow();
    });

    it('should not be able to submit feedback with an invalid screenshot', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'Example comment',
            screenshot: 'test.jpg',
        })).rejects.toThrow();
    });
});