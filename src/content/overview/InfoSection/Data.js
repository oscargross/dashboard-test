import Img2 from '../images/3.png'
import Img3 from '../images/4.png'

export const aboutObj = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Papamoney',
  headline: 'Simplicidade ao receber pagamentos',
  description: 'Escolha a forma de pagamento e a plataforma indicará qual o gateway do mercado que possui a taxa mais barata',
  buttonLabel: 'Gerar cobrança',
  imgStart: false,
  // img: Img1,
  alt: 'gateways',
  dark: true,
  primary: true,
  darkText: false
};

export const discoverObj = {
  id: 'discover',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Descubra o mundo das criptomoedas',
  headline: 'Papamoney se conecta com a melhor Dex para fazer seu swap',
  description: 'Ao gerar uma cobrança, além das formas tradicionais de pagamento utilizadas pelos gateways do mercado, você também poderá receber em cripto diretamente em sua carteira web3 com swaps em protocolos descentralizados como a Uniswap',
  buttonLabel: 'Receber via blockchain',
  imgStart: true,
  img: Img2,
  alt: 'Car',
  dark: false,
  primary: false,
  darkText: true
};

export const signupObj = {
  id: 'signup',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Gere cobranças a qualquer momento',
  headline: 'A forma mais barata de acessar gateways do mercado é aqui',
  description: 'Seu cliente escolherá o pagamento e você decide como quer receber',
  buttonLabel: 'Começar',
  imgStart: false,
  img: Img3,
  alt: 'svg3',
  dark: false,
  primary: false,
  darkText: true
};
