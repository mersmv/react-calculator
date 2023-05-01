import { createGlobalStyle } from 'styled-components';

const styled = { createGlobalStyle };

const GlobalStyles = styled.createGlobalStyle`

	*,
	*::after,
	*::before {
		box-sizing: border-box;
	}
	img {
		display: block;
		max-width: 100%;
	}
	a {
		text-decoration: none;
		color: inherit;
	}
	ul {
		list-style: none;
		margin-top: 0;
		margin-bottom: 0;
		padding-left: 0;
	}
	body {
		margin: 0;
		font-family: 'Nunito Sans', sans-serif;
	}
	img {
		max-width: 200px;
	}
	h1,
	h2,
	h3 {
		font-family: 'Judson', serif;
	}
	.cursive {
		font-family: 'Italianno', cursive;
	}
`;

export { GlobalStyles };