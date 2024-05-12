import React from 'react';
import * as Icon from 'react-feather';
import { Fade } from 'react-reveal';
import styled from 'styled-components';
import MyButton from '../../Components/MyButton/MyButton';
const MessageWrapper = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SuccessMessage = styled.h2`
  font-size: 25px;
  color: rgb(8, 8, 63);
  text-align: center;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const SuccessPage2 = () => {
    return (
        <React.Fragment>
            <Fade bottom duration={700} distance="60px">
                <MessageWrapper>
                    <Icon.CheckCircle color="rgb(8, 8, 63)" style={{ width: 50, height: 50 }} />
                    <SuccessMessage className="sucess-message">Estimated time of Arrival : 30 MIN</SuccessMessage>
                    <MyButton
                        marginTop={'10%'}
                        label="Continue Donating"
                        directory='/RegisteredItems'
                        normalColor="#1D8AC5"
                        hoverColor="#135E86"
                        paddingWidth={14}
                        paddingHeight={20}
                        minimumWidth={200}
                    />
                </MessageWrapper>
            </Fade>
        </React.Fragment>
    );
};

export default SuccessPage2;