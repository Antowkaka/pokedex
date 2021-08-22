import React from "react";

import { ReactComponent as BackBtn } from '../assets/backBtn.svg';

const Back = ({ onClick }) => <BackBtn onClick={onClick} style={{ height: '100%' }} />;

export default Back;