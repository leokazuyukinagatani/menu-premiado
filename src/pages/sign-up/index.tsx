'use client'

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Toast } from "@/components/ui/toast"

const isValidBrazilianPhoneNumber = (phone: string) => {
    const cleanPhone = phone.replace(/\D/g, '');
    return cleanPhone.length === 11;
  };

// CPF validation function
const isValidCPF = (cpf: string) => {
  const cleanCPF = cpf.replace(/\D/g, '')
  if (cleanCPF.length !== 11) return false
  if (/^(\d)\1{10}$/.test(cleanCPF)) return false

  let sum = 0
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cleanCPF.charAt(i)) * (10 - i)
  }
  let rev = 11 - (sum % 11)
  if (rev === 10 || rev === 11) rev = 0
  if (rev !== parseInt(cleanCPF.charAt(9))) return false

  sum = 0
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cleanCPF.charAt(i)) * (11 - i)
  }
  rev = 11 - (sum % 11)
  if (rev === 10 || rev === 11) rev = 0
  if (rev !== parseInt(cleanCPF.charAt(10))) return false

  return true
}

// Form schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Nome deve ser pelo menos dois caracteres." }),
  lastName: z.string().min(2, { message: "Sobrenome deve ser pelo menos dois caracteres." }),
  phoneNumber: z.string().refine((val) => isValidBrazilianPhoneNumber(val), {
    message: "Telefone inválido.",
  }),
  address: z.string().min(5, { message: "Endereço precisa ter pelo menos 5 caracteres." }),
  zipCode: z.string().min(5, { message: "CEP precisa ter pelo menos 5 caracteres." }),
  cpf: z.string().refine(isValidCPF, { message: "CPF inválido." }),
})

type FormValues = z.infer<typeof formSchema>

export function SignUp() {
    const [isSubmitting, setIsSubmitting] = useState(false)

    const { register, handleSubmit, control, formState: { errors } } = useForm<FormValues>({
      resolver: zodResolver(formSchema),
    })
    
    const navigation = useNavigate();

    const onSubmit = async (data: FormValues) => {
      setIsSubmitting(true)
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log(data)
      setIsSubmitting(false)
    //   Toast({
    //     title: "Cadastro concluído com sucesso!"
    //   })
      navigation("/")
    }
  
    return (
      <div className="min-h-screen flex items-center justify-center bg-white p-4">
        <Card className="border-8 border-red-800 rounded-3xl p-6 md:p-8 relative bg-white">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center  text-red-800">Cadastro</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-2">
                <Label className="text-md text-red-800" htmlFor="name">Nome</Label>
                <Input id="name" {...register("name")} />
                {/* {errors.name && <p className="text-sm text-red-800">{errors.name.message}</p>} */}
              </div>

              <div className="space-y-2">
                <Label className="text-md text-red-800" htmlFor="name">Sobrenome</Label>
                <Input id="name" {...register("lastName")} />
                {errors.name && <p className="text-sm text-red-800">{errors.name.message}</p>}
              </div>
  
              <div className="space-y-2">
                <Label className="text-md text-red-800" htmlFor="phoneNumber">Celular</Label>
                <Controller
                  name="phoneNumber"
                  control={control}
                  render={({ field }) => (
                    <Input
                      id="phoneNumber"
                      {...field}
                      onChange={(e) => {
                        const parsed = parsePhoneNumberFromString(e.target.value)
                        field.onChange(parsed ? parsed.formatInternational() : e.target.value)
                      }}
                    />
                  )}
                />
                {errors.phoneNumber && <p className="text-sm text-red-800">{errors.phoneNumber.message}</p>}
              </div>
  
              <div className="space-y-2">
                <Label className="text-md text-red-800" htmlFor="address">Endereço</Label>
                <Input id="address" {...register("address")} />
                {errors.address && <p className="text-sm text-red-800">{errors.address.message}</p>}
              </div>
  
              {/* <div className="space-y-2">
                <Label htmlFor="numberAddress">Number</Label>
                <Input id="numberAddress" {...register("numberAddress")} />
                {errors.numberAddress && <p className="text-sm text-red-500">{errors.numberAddress.message}</p>}
              </div> */}
  
              <div className="space-y-2">
                <Label className="text-md text-red-800" htmlFor="zipCode">CEP</Label>
                <Input id="zipCode" {...register("zipCode")} />
                {errors.zipCode && <p className="text-sm text-red-800">{errors.zipCode.message}</p>}
              </div>
  
              <div className="space-y-2">
                <Label className="text-md text-red-800" htmlFor="cpf">CPF</Label>
                <Controller
                  name="cpf"
                  control={control}
                  render={({ field }) => (
                    <Input
                      id="cpf"
                      {...field}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, '')
                        const maskedValue = value
                          .replace(/(\d{3})(\d)/, '$1.$2')
                          .replace(/(\d{3})(\d)/, '$1.$2')
                          .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
                          .slice(0, 14)
                        field.onChange(maskedValue)
                      }}
                    />
                  )}
                />
                {errors.cpf && <p className="text-sm text-red-700">{errors.cpf.message}</p>}
              </div>
  
              <Button type="submit" className="bg-red-800 hover:bg-red-900 text-white w-full" disabled={isSubmitting}>
                {isSubmitting ? "Quase lá..." : "Cadastrar"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
}