import React, { FC } from 'react';
import styled from 'styled-components';
import { Dialog, DialogFooterButton, DialogWindow } from './Dialogs';
import { T } from '../../Helpers';
import { useZakeke } from 'zakeke-configurator-react';
import { QuantityContainer } from '../layouts/LayoutStyled';
import NumericInput from '../layouts/NumericInput';
import { ProductQuantityRule } from 'zakeke-configurator-react';

const QuantityDialogWindow = styled(DialogWindow)`
	max-width: unset;
	display: flex;
	flex-direction: column;
`;

const QuantityDialog: FC<{ quantityRule: ProductQuantityRule; onClick?: () => void }> = ({ quantityRule, onClick }) => {
	const { quantity, setQuantity, publicTranslations } = useZakeke();
	const staticsVals = publicTranslations?.statics; 

	return (
		<Dialog windowDecorator={QuantityDialogWindow} alignButtons={'center'}>
			<QuantityContainer>
				<label>{T._d('Quantity')}</label>
				<NumericInput
					value={quantity}
					readOnly
					onInput={(e: any) => setQuantity(parseFloat(e.currentTarget.value))}
					min={
						quantityRule.minQuantity != null
							? Math.max(quantityRule.step || 1, quantityRule.minQuantity)
							: quantityRule.step || 1
					}
					max={quantityRule.maxQuantity != null ? quantityRule.maxQuantity : undefined}
					step={quantityRule.step != null ? quantityRule.step : undefined}
				/>
			</QuantityContainer>
			<DialogFooterButton isFullWidth onClick={onClick}>
			 {staticsVals?.get('Get a quote')} 
			</DialogFooterButton>
		</Dialog>
	);
};

export default QuantityDialog;
