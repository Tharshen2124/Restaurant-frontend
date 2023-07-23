import Button from '@/components/atoms/Button'
import LabelForms from '@/components/atoms/label'
import { Title } from '@/components/atoms/registerTitle'
import Link from 'next/link'

export default function login() {
    return (
      <>
      <Link href="/">Back</Link>
          <div className="container mx-auto py-8">
            <form className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
                <Title name="Welcome Back!"/>
                <div className="mb-4">
                  <LabelForms htmlFor="email" name="Email"/>
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" 
                    type="email" id="email" name="email" placeholder="john@example.com"
                  />
                </div>
                <div className="mb-4">
                  <LabelForms htmlFor="password" name="Password"/>
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" 
                    type="password" id="password" name="password" placeholder="********"
                  />
                </div>
                <Button type="submit" name="Login"/>
            </form>
          </div>
      </>
    )
  }
  