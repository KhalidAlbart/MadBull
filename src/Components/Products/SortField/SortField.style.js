import styled, { css } from 'styled-components';
import * as SearchField from '../SearchField/SearchField.style';

export const Wrap = styled(SearchField.Wrap)({});

export const Select = styled.select({ width: '100%'}, css`${SearchField.fontMixin}`);