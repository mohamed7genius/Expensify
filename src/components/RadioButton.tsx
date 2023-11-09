import React from 'react';
import {View} from 'react-native';
import styles from '@styles/styles';
import themeColors from '@styles/themes/default';
import CONST from '@src/CONST';
import Icon from './Icon';
import * as Expensicons from './Icon/Expensicons';
import PressableWithFeedback from './Pressable/PressableWithFeedback';

type RadioButtonProps = {
    /** Whether radioButton is checked */
    isChecked: boolean;

    /** A function that is called when the box/label is pressed */
    onPress?: () => void;

    /** Specifies the accessibility label for the radio button */
    accessibilityLabel: string;

    /** Should the input be styled for errors  */
    hasError?: boolean;

    /** Should the input be disabled  */
    disabled?: boolean;
};

function RadioButton({isChecked, onPress = () => undefined, accessibilityLabel, disabled = false, hasError = false}: RadioButtonProps) {
    return (
        <PressableWithFeedback
            disabled={disabled}
            onPress={onPress}
            hoverDimmingValue={1}
            pressDimmingValue={1}
            accessibilityLabel={accessibilityLabel}
            role={CONST.ACCESSIBILITY_ROLE.RADIO}
        >
            <View style={[styles.radioButtonContainer, hasError && styles.borderColorDanger, disabled && styles.cursorDisabled]}>
                {isChecked && (
                    <Icon
                        src={Expensicons.Checkmark}
                        fill={themeColors.checkBox}
                        height={14}
                        width={14}
                    />
                )}
            </View>
        </PressableWithFeedback>
    );
}

export default RadioButton;
