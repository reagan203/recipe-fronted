import React from 'react';
import { Container, Typography, Link } from '@mui/material';

const Footer = () => {
    return (
        <footer style={{ marginTop: '50px', backgroundColor: '#f0f0f0', padding: '20px 0', textAlign: 'center' }}>
            <Container>
                <Typography variant="body2" color="textSecondary">
                    &copy; {new Date().getFullYear()} Recipe App. All rights reserved.
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    Designed by <Link href="reagan203.github.io/portfolio/" target="_blank" rel="noopener">Reagan</Link>
                </Typography>
            </Container>
        </footer>
    );
};

export default Footer;
