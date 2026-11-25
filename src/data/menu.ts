export type MenuCategory =
  | 'Empadinhas'
  | 'Petiscos'
  | 'Pratos & Feijoada'
  | 'Bebidas & Chopp';

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  subtitle?: string;
  note?: string;
  featured?: boolean;
  awardBadge?: string;
  image: string;
  illustrationType:
    | 'empadinha'
    | 'bolinho'
    | 'frango'
    | 'batata'
    | 'pudim'
    | 'rabanada'
    | 'bacalhau'
    | 'rechaud'
    | 'parmegiana'
    | 'pernil'
    | 'file'
    | 'feijoada'
    | 'chopp'
    | 'cerveja'
    | 'drink';
}

export const MENU_CATEGORIES: MenuCategory[] = [
  'Empadinhas',
  'Petiscos',
  'Pratos & Feijoada',
  'Bebidas & Chopp',
];

export const HERO_IMAGE = '/src/assets/images/hero_boteco_maria_1795642097372.jpg';

const IMG_EMPADINHAS = '/src/assets/images/empadinhas_premiadas_1795642083052.jpg';
const IMG_PETISCOS = '/src/assets/images/petiscos_boteco_1795642083560.jpg';
const IMG_PRATOS = '/src/assets/images/pratos_feijoada_1795642084390.jpg';
const IMG_CHOPP = '/src/assets/images/chopp_cremoso_1795642084378.jpg';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'empadinhas-premiadas',
    name: 'Empadinhas premiadas',
    category: 'Empadinhas',
    subtitle: 'Receita símbolo da casa',
    note: 'Destaque tradicional do Boteco Maria, reconhecida pela Revista Veja ABC.',
    featured: true,
    awardBadge: 'Premiado Veja ABC',
    image: IMG_EMPADINHAS,
    illustrationType: 'empadinha',
  },
  {
    id: 'bolinho-de-bacalhau',
    name: 'Bolinho de Bacalhau',
    category: 'Petiscos',
    subtitle: 'Clássico de botequim',
    note: 'Petisco tradicional servido quente na mesa do boteco.',
    featured: true,
    image: IMG_PETISCOS,
    illustrationType: 'bolinho',
  },
  {
    id: 'frango-a-passarinho',
    name: 'Frango a Passarinho',
    category: 'Petiscos',
    subtitle: 'Petisco tradicional da casa',
    note: 'Clássico de petiscaria para compartilhar com a mesa.',
    image: IMG_PETISCOS,
    illustrationType: 'frango',
  },
  {
    id: 'batata-frita-com-bacon',
    name: 'Batata Frita com Bacon',
    category: 'Petiscos',
    subtitle: 'Porção de boteco',
    note: 'Opção clássica para acompanhar chopp ou cerveja gelada.',
    image: IMG_PETISCOS,
    illustrationType: 'batata',
  },
  {
    id: 'pudim-de-leite',
    name: 'Pudim de Leite',
    category: 'Petiscos',
    subtitle: 'Sobremesa tradicional',
    note: 'Doce clássico servido na cozinha tradicional da casa.',
    image: IMG_EMPADINHAS,
    illustrationType: 'pudim',
  },
  {
    id: 'rabanada',
    name: 'Rabanada',
    category: 'Petiscos',
    subtitle: 'Doce da casa',
    note: 'Receita tradicional de botequim para encerrar a refeição.',
    image: IMG_EMPADINHAS,
    illustrationType: 'rabanada',
  },
  {
    id: 'bacalhau-do-boteco',
    name: 'Bacalhau do Boteco',
    category: 'Pratos & Feijoada',
    subtitle: 'Especialidade da casa',
    note: 'Prato tradicional preparado na cozinha do Boteco Maria.',
    featured: true,
    image: IMG_PRATOS,
    illustrationType: 'bacalhau',
  },
  {
    id: 'mix-de-carnes-no-rechaud',
    name: 'Mix de Carnes no Rechaud',
    category: 'Pratos & Feijoada',
    subtitle: 'Maminha, picanha e linguiça',
    note: 'Servido no rechaud com maminha, picanha e linguiça.',
    featured: true,
    image: IMG_PRATOS,
    illustrationType: 'rechaud',
  },
  {
    id: 'mini-parmegiana',
    name: 'Mini Parmegiana',
    category: 'Pratos & Feijoada',
    subtitle: 'Prato clássico de boteco',
    note: 'Opção tradicional servida no salão do Boteco Maria.',
    image: IMG_PRATOS,
    illustrationType: 'parmegiana',
  },
  {
    id: 'lanche-de-pernil',
    name: 'Lanche de Pernil',
    category: 'Pratos & Feijoada',
    subtitle: 'Clássico paulista',
    note: 'Sanduíche tradicional da cultura de botequim.',
    image: IMG_PETISCOS,
    illustrationType: 'pernil',
  },
  {
    id: 'file-esposende',
    name: 'Filé Esposende',
    category: 'Pratos & Feijoada',
    subtitle: 'Prato da casa',
    note: 'Especialidade servida pela cozinha do Boteco Maria.',
    image: IMG_PRATOS,
    illustrationType: 'file',
  },
  {
    id: 'feijoada-na-cumbuca',
    name: 'Feijoada na Cumbuca',
    category: 'Pratos & Feijoada',
    subtitle: 'Fins de semana',
    note: 'Tradição dos fins de semana servida na cumbuca.',
    featured: true,
    image: IMG_PRATOS,
    illustrationType: 'feijoada',
  },
  {
    id: 'chopp-cremoso',
    name: 'Chopp cremoso',
    category: 'Bebidas & Chopp',
    subtitle: 'Tirado na pressão',
    note: 'Servido gelado com colarinho cremoso no balcão e nas mesas.',
    featured: true,
    image: IMG_CHOPP,
    illustrationType: 'chopp',
  },
  {
    id: 'cervejas',
    name: 'Cervejas',
    category: 'Bebidas & Chopp',
    subtitle: 'Seleção do bar',
    note: 'Rótulos servidos bem gelados conforme carta do dia na casa.',
    image: IMG_CHOPP,
    illustrationType: 'cerveja',
  },
  {
    id: 'drinks',
    name: 'Drinks',
    category: 'Bebidas & Chopp',
    subtitle: 'Coquetelaria de botequim',
    note: 'Preparados no bar do Boteco Maria.',
    image: IMG_CHOPP,
    illustrationType: 'drink',
  },
];
