import React from 'react'
import { Navigate } from 'react-router-dom'
import { CandidateAuth } from '../contexts/AuthContext'
import { EmployerAuth } from '../contexts/EmployerAuthContext'

const ProtectedRoute = ({ children }) => {
    const {candidate} = CandidateAuth();
    const {employer} = EmployerAuth();

    if (!candidate) {
        return <Navigate to='/SignInCandidate' />
    }

    return children
}

export default ProtectedRoute
