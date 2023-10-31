import { IUser } from '@/types/globals/user'

const user: IUser = {
  id: 0,
  name: 'João Paulo F',
  email: 'joaopaulo@gmail.com.com',
  username: 'joao512',
  telefone: '81991557058',
  password: '51423687',
  avatar:
    'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  perfilPhoto:
    'https://images.unsplash.com/photo-1444090542259-0af8fa96557e?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
}

export default user

export const users: { [key: string]: IUser } = {
  joao512: {
    id: 0,
    isOnline: false,
    name: 'João Paulo F',
    email: 'joaopaulo@gmail.com.com',
    username: 'joao512',
    telefone: '81991557058',
    password: '51423687',
    avatar:
      'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    perfilPhoto:
      'https://images.unsplash.com/photo-1444090542259-0af8fa96557e?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },

  maria123: {
    isOnline: false,
    id: 1,
    name: 'Maria',
    email: 'maria@gmail.com.com',
    username: 'maria123',
    telefone: '81991557058',
    password: '51423687',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    perfilPhoto:
      'https://images.unsplash.com/photo-1589802829985-817e51171b92?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },

  marcos23: {
    id: 1,
    isOnline: true,
    name: 'Marcos Matheus S',
    email: 'marcos@gmail.com.com',
    username: 'marcos23',
    telefone: '81991557058',
    password: '51423687',
    avatar:
      'https://images.unsplash.com/photo-1636041247094-a9e97be7a77a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D',
    perfilPhoto:
      'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&q=80&w=2076&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
}
