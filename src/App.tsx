import React from 'react'
import './App.css'
import { Input } from './component/ui/input'
import { Button } from './component/ui/button'
import axios from 'axios'

function App() {
  const [email, setEmail] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')

  async function handleLogin(event: React.FormEvent) {
    event.preventDefault();
    console.log(email, password);

    try {
      const response = await axios.post('http://localhost:4000/sessions', {
        email,
        password,
      });

      console.log('Login realizado com sucesso:', response.data);
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  }

  return (
    <div className="flex justify-center items-center min-h-[70vh]">
      <form
        onSubmit={handleLogin}
        className="flex w-full max-w-sm min-h-[350px] justify-between items-center flex-col gap-8 p-8 bg-gray-800 rounded-md">
        <span className='text-white sm:text-3xl font-semibold'>Login</span>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          type="password"
          placeholder="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button type="submit" className='w-full bg-black'>Entrar</Button>
      </form>
    </div>
  )
}

export default App
