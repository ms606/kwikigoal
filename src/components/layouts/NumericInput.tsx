import React, { FC } from "react";
import styled from "styled-components";
import { Icon } from "../Atomic";
import { ReactComponent as UpArrow } from '../../assets/icons/arrow-left-solid.svg';
import { ReactComponent as DownArrow } from '../../assets/icons/arrow-left-solid.svg';

const NumberInput = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    margin-left:5px;
    border:1px solid #f4f4f4;
    input{
        width:50px;
        border:1px solid transparent;
    }
    padding:5px 10px 5px 10px;
`;

const NumberInputArrows = styled.div`
    display:flex;
    flex-direction:column;
    div{
        width: 15px;
        height: 15px;
        color:gray;
    }
`;

const Input = styled.input`
`;

export const NumericInput: FC<{
    value?: number,
    readOnly: boolean,
    onInput: (e: any) => void,
    min: number,
    max: number | undefined,
    step: number | undefined
}> =
    ({ value, readOnly, onInput, min, max, step }) => {

        let ref: HTMLInputElement | null;

        let handleUpClick = () => {
            if (!ref)
                return;

            let oldValue = parseFloat(ref.value || ref.min || "0");

            let step = parseFloat(ref.step || "1");
            ref.value = (oldValue + step).toString();

            if (ref.max && parseFloat(ref.value) > parseFloat(ref.max))
                ref.value = ref.max;

            const setValue = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')!.set!;
            const event = new Event('input', { bubbles: true });

            setValue.call(ref, ref.value);
            ref.dispatchEvent(event);
        }

        let handleDownClick = () => {
            if (!ref)
                return;

            let oldValue = parseFloat(ref.value || ref.min || "0");

            let step = parseFloat(ref.step || "1");
            ref.value = (oldValue - step).toString();

            if (ref.min && parseFloat(ref.value) < parseFloat(ref.min))
                ref.value = ref.min;

            var nativeInputValueSetter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")!.set!;
            nativeInputValueSetter.call(ref, ref.value);

            var ev = new Event('input', { bubbles: true });
            ref.dispatchEvent(ev);

        }

        return <NumberInput>
            <Input
                value={value}
                readOnly={readOnly}
                onInput={() => onInput}
                min={min}
                max={max}
                step={step}
                ref={input => ref = input ? input : null} />
            <NumberInputArrows>
                <Icon hoverable onClick={handleUpClick}><UpArrow /></Icon>
                <Icon hoverable onClick={handleDownClick}><DownArrow /></Icon>
            </NumberInputArrows>
        </NumberInput>

    };

export default NumericInput;