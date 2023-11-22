import { SubmitButton, SubmitText } from './styles';

export const CustomSubmitButtonOption  = ({ onPress, text, activeOpacity }) => {
    return (
        <SubmitButton
            activeOpacity={activeOpacity || 0.8}
            onPress={onPress}
        >
            <SubmitText
            >
                {text}
            </SubmitText>
        </SubmitButton>
    );
};