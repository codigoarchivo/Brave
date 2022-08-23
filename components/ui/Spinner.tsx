import { Box } from '@mui/material'
import React from 'react'

export const Spinner = () => {

    return (
        <Box sx={{ display: 'flex', height: 'calc(100vh  - 100px)', alignItems: 'center' }}>
            <div className="sk-cube-grid">
                <div className="sk-cube sk-cube1"></div>
                <div className="sk-cube sk-cube2"></div>
                <div className="sk-cube sk-cube3"></div>
                <div className="sk-cube sk-cube4"></div>
                <div className="sk-cube sk-cube5"></div>
                <div className="sk-cube sk-cube6"></div>
                <div className="sk-cube sk-cube7"></div>
                <div className="sk-cube sk-cube8"></div>
                <div className="sk-cube sk-cube9"></div>
            </div>
        </Box>
    )
}
