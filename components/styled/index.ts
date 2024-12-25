import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Title = styled.h1`
  color: var(--white);
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
`;

export const Card = styled(motion.div)`
  background: var(--black);
  border: 1px solid var(--green);
  border-radius: 0.5rem;
  padding: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 0 20px var(--pink);
    transform: translateY(-5px);
  }
`;

export const Button = styled.button`
  background: var(--green);
  color: var(--black);
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: var(--pink);
    color: var(--white);
  }
`;

export const GradientText = styled.span`
  background: linear-gradient(135deg, var(--green), var(--pink));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
`;