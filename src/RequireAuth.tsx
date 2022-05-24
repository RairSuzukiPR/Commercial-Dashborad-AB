import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { api } from './api';
import { useDispatch } from 'react-redux';
import { setToken } from './redux/reducers/userReducer';
import { useAppSelector } from "./redux/hooks/useAppSelector";

type Props = {
    children: JSX.Element;
}

export default function RequireAuth({children}: Props) {

    const user = useAppSelector(state => state.userRed);

    if (user.token == '') {
        return <Navigate to="/login"/>;
    }

    return children;

}
