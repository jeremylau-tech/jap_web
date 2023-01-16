import React from 'react'
import { Navigate } from 'react-router-dom'
import { CandidateAuth } from '../contexts/AuthContext'

const ProtectedRoute = ({ children }) => {
    const {candidate} = CandidateAuth();

    if (!candidate) {
        return <Navigate to='/SignInCandidate' />
    }

    return children
}

export default ProtectedRoute
