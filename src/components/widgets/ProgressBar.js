import { useZakeke } from 'zakeke-configurator-react';
import { T } from '../../Helpers';
import React, { FC } from 'react';
import styled from 'styled-components/macro';
// import { ReactComponent as CheckSolid } from '../../assets/icons/check-circle-solid_1.svg';
// import { Icon } from 'components/Atomic';

const LoadingLabel = styled.div`
  color: #000;
  font-size: 12px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
`;

const LoaderContainer = styled.div`
  height: 8px;
  width: 600px;
  border-radius: 4px;
  background-color: #dbe2e6;

  @media screen and (max-width: 766px){
    width: 310px;
   }
`;

const LoadingPercentageLabel = styled.span`
  color: #8fa4ae;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  font-style: normal;
  font-family: 'Inter';
`;

const LoadingPercentageandIconContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

// const CheckIcon = styled(Icon)`
//   cursor: unset;
//   color: #008556;
// `;

const LoaderFill = styled.div`
  height: 100%;
  border-radius: 4px;
  margin: 7px 0px;
  width: ${({ completed }) => completed && `${completed}%`};
  background-color: #008556;
  border-radius: 'inherit';
`;

const ProgressBar = ({ bgColor, completed }) => {
  const { isSceneLoading, publicTranslations } = useZakeke();
  const dynamicVals = publicTranslations?.dynamics;
  return (
    <div>
      <LoadingLabel>
        {/* {console.log(T.d('Loading..'),'esfdfsfdssfds');} */}
        {dynamicVals?.get('Loading...')}
       
        {/* {isSceneLoading ? T._('Loading your product...', 'Composer') : T._('Loading complete.', 'Composer')} */}
      </LoadingLabel>
      <LoaderContainer>
        <LoaderFill completed={isSceneLoading ? completed : 100} bgColor={bgColor} isCompleted={!isSceneLoading} />
        <LoadingPercentageandIconContainer>
          <LoadingPercentageLabel>
            {isSceneLoading ? `${completed}%` : '100%'}
            {/* {isSceneLoading ? T._('In progress | ', 'Composer') + `${completed}%` : '100%'} */}
          </LoadingPercentageLabel>
        {/* // {!isSceneLoading && (
            // <CheckIcon>
            //   <CheckSolid />
            // </CheckIcon>
          )} */}
        </LoadingPercentageandIconContainer>
      </LoaderContainer>
    </div>
  );
};

export default ProgressBar;
