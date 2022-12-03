import { useEffect, useState } from "react";
import { TextInput } from "react-native";

const SInput = ({
    onChange,
    style,
    value,
    id,
    focusedInputId,
    onSubmitEditing
}) => {



    return (
        <TextInput
            onSubmitEditing={onSubmitEditing}
            autoFocus={id === focusedInputId}
            focusable={id === focusedInputId}
            maxLength={1}
            value={value}
            onChangeText={onChange}
            style={value ? { ...style, borderColor: 'red', borderWidth: 2 } : style}
        />
    )
}

export default SInput;