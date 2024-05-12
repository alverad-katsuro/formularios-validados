'use client'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const FormSchema = z.object({
  nome: z
    .string()
    .regex(/^[A-Z][a-z]+(\s[A-Z][a-z]+)*\s[A-Z][a-z]+$/, {
      message: 'Regex: ^[A-Z][a-z]+(\\s[A-Z][a-z]+)*\\s[A-Z][a-z]+$',
    })
    .optional(),
  email: z
    .string()
    .regex(/^[a-z]+@[a-z]+(.com.br|.com)$/, {
      message: 'Regex: ^[a-z]+@[a-z]+(.com.br|.com)$',
    })
    .optional(),
  senha: z
    .string()
    .regex(/^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8}$/, {
      message: 'Regex: ^(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8}$',
    })
    .optional(),
  cpf: z
    .string()
    .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, {
      message: 'Regex: ^\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}$',
    })
    .optional(),
  telefone: z
    .string()
    .regex(
      /^(\(\d{2}\) 9\d{4}-\d{4}|\(\d{2}\) 9\d{4}\d{4}|\d{2} 9\d{4}\d{4})$/,
      {
        message:
          'Regex: ^(\\(\\d{2}\\) 9\\d{4}-\\d{4}|\\(\\d{2}\\) 9\\d{4}\\d{4}|\\d{2} 9\\d{4}\\d{4})$',
      },
    )
    .optional(),
  dataHora: z
    .string()
    .regex(/^\d{2}\/\d{2}\/\d{4} \d{2}:\d{2}:\d{2}$/, {
      message: 'Regex: ^\\d{2}\\/\\d{2}\\/\\d{4} \\d{2}:\\d{2}:\\d{2}$',
    })
    .optional(),
  numero: z
    .string()
    .regex(/^(\+|-|)\d+(\.\d+)?$/, {
      message: 'Regex: ^(\\+|-|)\\d+(\\.\\d+)?$',
    })
    .optional(),
  q2a: z
    .string()
    .regex(/^(HM|MH)((mmm*|h+)|((?=.*m)(?=.*h.*h)(?!.*m.*m)[hm]*))$/, {
      message: 'Regex: ^(HM|MH)((mmm*|h+)|((?=.*m)(?=.*h.*h)(?!.*m.*m)[hm]*))$',
    })
    .optional(),
  q2b: z
    .string()
    .regex(/^(HM|MH)h*m(h*mh*mh*)*$/, {
      message: 'Regex: ^(HM|MH)h*m(h*mh*mh*)*$',
    })
    .optional(),
  q2c: z
    .string()
    .regex(/^(HM|MH)m[hm]*h$/, {
      message: 'Regex: ^(HM|MH)m[hm]*h$',
    })
    .optional(),
  q2d: z
    .string()
    .regex(/^(MM|HH)(hm|mh)[hm]*(hm|mh|mm|hh)+[hm]*(hm|mh)$/, {
      message: 'Regex: ^(MM|HH)(hm|mh)[hm]*(hm|mh|mm|hh)+[hm]*(hm|mh)$',
    })
    .optional(),
  q2e: z
    .string()
    .regex(/^(MM|HH)(m((hm)*h|(hm)+)|h((mh)*m|(mh)+))$/, {
      message: 'Regex: ^(MM|HH)(m((hm)*h|(hm)+)|h((mh)*m|(mh)+))$',
    })
    .optional(),
  q2f: z
    .string()
    .regex(/^(MM|HH)(m|hm)*h?$/, {
      message: 'Regex: ^(MM|HH)(m|hm)*h?$',
    })
    .optional(),
  q2g: z
    .string()
    .regex(/^([HM]{1,3})[hm]*$(?<!hhh$)/, {
      message: 'Regex: ^([HM]{1,3})[hm]*$(?<!hhh$)',
    })
    .optional(),
})

export default function Home() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: 'onChange',
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-24">
      <div>
        <p className="text-justify">
          <strong>Disciplina:</strong> Teoria da Computação
        </p>
        <p className="text-justify">
          <strong>Aluno:</strong> Alfredo Gabriel de Sousa Oliveira
        </p>
        <p className="text-center font-bold">Trabalho de Expressão Regular</p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6"
        >
          <div className="flex flex-col gap-4 text-justify">
            <p>
              1. [4.0 pontos] O preenchimento de um conjunto de campos em um
              formulário é uma tarefa comum que se faz presente em diversas
              aplicações para web, mobile e desktop. Cada campo, normalmente,
              necessita obedecer um conjunto de regras para que sua validação
              retorne sucesso. Por exemplo, em um campo de e-mail, tipicamente
              brasileiro, espera-se obter cadeias na forma
            </p>
            <p className="text-center">
              (a∣b∣…∣z)<sup>+</sup>@(a∣b∣…∣z)<sup>+</sup>(.com∣.com.br)
            </p>
            <p>
              As expressões regulares são técnicas robustas e rápidas para
              verificar se uma determinada cadeia, i.e., a string digitada pelo
              usuário, pertence a uma determinada linguagem, i.e., obedece ao
              conjunto de regras sobre o alfabeto do campo. Neste contexto,
              desenvolva, na linguagem de programação de sua preferência, um
              conjunto de máscaras de validação, por meio de expressões
              regulares, que obedecem as especificações prévias de cada campo
              abaixo. Considere os seguintes alfabetos Σ = {'{'}a, b, c, …, z
              {'}'}, Γ = {'{'}A, B, C, …, Z{'}'} e N = {'{'}0, 1, 2, …, 9{'}'}.
            </p>
            <div>
              <li className="font-bold">Nome, nome do meio e sobrenome:</li>
              <ol className="list-decimal pl-8">
                <li>
                  Nome, nome do meio e sobrenome devem vir separados por um
                  espaço apenas
                </li>
                <li>O nome do meio é opcional</li>
                <li>Nome e sobrenome devem ser ambos não vazios</li>
                <li>Não deve aceitar caracteres especiais ou números</li>
                <li>
                  O primeiro símbolo do nome e sobrenome, e do nome do meio se
                  existir, deve ser do alfabeto Γ e os outros símbolos devem ser
                  do alfabeto Σ
                </li>
              </ol>
              <p>
                Ex. de sentenças aceitas: Ada Lovelace, Alan Turing, Stephen
                Cole Kleene
              </p>
              <p>
                Ex. de cadeias rejeitadas: 1Alan, Alan, A1an, A1an Turing, Alan
                turing
              </p>
            </div>
          </div>
          <FormField
            control={form.control}
            name="nome"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel
                  className={
                    !fieldState.invalid ? 'text-green-600' : 'text-red-600'
                  }
                >
                  Nome
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Alfredo Gabriel"
                    {...field}
                    className={
                      !fieldState.invalid
                        ? 'border-green-600'
                        : 'border-red-600'
                    }
                  />
                </FormControl>
                <FormDescription>
                  Leia as regras de validação acima antes de preencher o campo.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            <li className="font-bold">E-mail:</li>
            <ol className="list-decimal pl-8">
              <li>Sentenças devem conter um, e apenas um, símbolo “@”</li>
              <li>
                Excetuando o símbolo “@”, as sentenças possuem apenas símbolos
                de Σ
              </li>
              <li>Sentenças não devem começar com o símbolo “@”</li>
              <li>
                Sentenças devem terminar com a subcadeia “.com.br” ou “.br”
              </li>
              <li>
                Sentenças devem ter, pelo menos, um símbolo de Σ entre o símbolo
                “@” e a subcadeia “.com.br” ou a subcadeia “.br”
              </li>
            </ol>
            <p>Ex. de sentenças aceitas: a@a.br, divulga@ufpa.br, a@a.com.br</p>
            <p>
              Ex. de cadeias rejeitadas: @, a@.br, @a.br, T@teste.br, a@A.com.br
            </p>
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel
                  className={
                    !fieldState.invalid ? 'text-green-600' : 'text-red-600'
                  }
                >
                  Email
                </FormLabel>
                <FormControl
                  className={
                    !fieldState.invalid ? 'border-green-600' : 'border-red-600'
                  }
                >
                  <Input placeholder="alfredogdso@alverad.com.br" {...field} />
                </FormControl>
                <FormDescription>
                  Leia as regras de validação acima antes de preencher o campo.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div>
            <li className="font-bold">CPF:</li>
            <ol className="list-decimal pl-8">
              <li>Sentenças devem ter o formato xxx.xxx.xxx-xx, onde x N</li>
            </ol>
            <p>Ex. de sentenças aceitas: 123.456.789-09, 000.000.000-00</p>
            <p>Ex. de cadeias rejeitadas: 123.456.789-0, 111.111.11-11</p>
          </div>

          <FormField
            control={form.control}
            name="cpf"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel
                  className={
                    !fieldState.invalid ? 'text-green-600' : 'text-red-600'
                  }
                >
                  CPF
                </FormLabel>
                <FormControl
                  className={
                    !fieldState.invalid ? 'border-green-600' : 'border-red-600'
                  }
                >
                  <Input placeholder="000.000.000-00" {...field} />
                </FormControl>
                <FormDescription>
                  Leia as regras de validação acima antes de preencher o campo.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            <li className="font-bold">Telefone:</li>
            <ol className="list-decimal pl-8">
              <li>Sentenças devem ter um dos formatos seguintes</li>
              <p className="text-red-600">
                (xx) 9xxxx-xxxx
                <br />
                (xx) 9xxxxxxxx
                <br />
                xx 9xxxxxxxx
                <br />
              </p>
              <p>onde x N</p>
            </ol>
            <p>
              Ex. de sentenças aceitas: (91) 99999-9999, (91) 999999999, 91
              999999999
            </p>
            <p>
              Ex. de cadeias rejeitadas: (91) 59999-9999, 99 99999-9999,
              (94)95555-5555
            </p>
          </div>

          <FormField
            control={form.control}
            name="telefone"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel
                  className={
                    !fieldState.invalid ? 'text-green-600' : 'text-red-600'
                  }
                >
                  Telefone
                </FormLabel>
                <FormControl
                  className={
                    !fieldState.invalid ? 'border-green-600' : 'border-red-600'
                  }
                >
                  <Input placeholder="(00) 90000-0000" {...field} />
                </FormControl>
                <FormDescription>
                  Leia as regras de validação acima antes de preencher o campo.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div>
            <li className="font-bold">Data e horário:</li>
            <ol className="list-decimal pl-8">
              <li>
                Sentenças devem ter o formato dd/mm/aaaa hh:mm:ss, onde d, m, a,
                h, m, s N.
              </li>
            </ol>
            <p>
              Ex. de sentenças aceitas: 31/08/2019 20:14:55, 99/99/9999 23:59:59
            </p>
            <p>
              Ex. de cadeias rejeitadas: 99/99/9999 3:9:9, 9/9/99 99:99:99,
              99/99/999903:09:09
            </p>
          </div>

          <FormField
            control={form.control}
            name="dataHora"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel
                  className={
                    !fieldState.invalid ? 'text-green-600' : 'text-red-600'
                  }
                >
                  Data e Hora
                </FormLabel>
                <FormControl
                  className={
                    !fieldState.invalid ? 'border-green-600' : 'border-red-600'
                  }
                >
                  <Input placeholder="00/00/0000 00:00:00" {...field} />
                </FormControl>
                <FormDescription>
                  Leia as regras de validação acima antes de preencher o campo.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div>
            <li className="font-bold">Número real com ou sem sinal:</li>
            <ol className="list-decimal pl-8">
              <li>
                Sentenças devem começar com um dos símbolos do alfabeto {'{'}+,
                -, ε{'}'}
              </li>
              <li>
                Em seguida, as sentenças devem ter, pelo menos, um símbolo do
                alfabeto N
              </li>
              <li>
                Em seguida, as sentenças devem ter, exatamente, um símbolo
                separador “.”
              </li>
              <li>
                Em seguida, as sentenças devem finalizar com, pelo menos, um
                símbolo de N
              </li>
              <li>
                Exceção: números sem a parte fracionária também devem ser
                aceitos
              </li>
            </ol>
            <p>Ex. de sentenças aceitas: -25.467, 1, -1, +1, 64.2 </p>
            <p>Ex. de cadeias rejeitadas: 1., .2, +64,2</p>
          </div>

          <FormField
            control={form.control}
            name="numero"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel
                  className={
                    !fieldState.invalid ? 'text-green-600' : 'text-red-600'
                  }
                >
                  Número
                </FormLabel>
                <FormControl
                  className={
                    !fieldState.invalid ? 'border-green-600' : 'border-red-600'
                  }
                >
                  <Input placeholder="10000000" {...field} />
                </FormControl>
                <FormDescription>
                  Leia as regras de validação acima antes de preencher o campo.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-col gap-4 text-justify">
            <p>
              [6.0 pontos] Implemente, na linguagem de programação de sua
              preferência, os arranjos familiares solicitados nos itens abaixo
              sobre o alfabeto Σ = {'{'}(H, M, h, m){'}'}, com significado:
            </p>
            <ol className="list-square pl-8">
              <li>
                <strong>H</strong> representa um homem;
              </li>
              <li>
                <strong>M</strong> representa uma mulher;
              </li>
              <li>
                <strong>h</strong> representa um filho do sexo masculino
                (natural ou adotado);
              </li>
              <li>
                <strong>m</strong> representa uma filha do sexo feminimo
                (natural ou adotado);
              </li>
              <li>
                A posição relativa de uma letra em relação às demais indica a
                idade relativa daquele membro da família em relação aos demais
                (os mais novos estão sempre à direita).
              </li>
            </ol>
            <p>
              Exemplo: a cadeia “MHhmm” representa uma família com um casal
              heterossexual em que a mulher é mais velha que o homem. Além
              disso, esse casal possui três filhos, um homem e duas mulheres,
              sendo que o filho homem é o mais velho dos três.
            </p>
            <div>
              <ol className="flex list-alphabet flex-col gap-4 pl-8">
                <li>
                  Casais heterossexuais mais velhos que os filhos com pelo menos
                  duas filhas mulheres, ou pelo menos um filho homem, ou ainda
                  pelo menos dois filhos homens e uma filha mulher.
                </li>
                <FormField
                  control={form.control}
                  name="q2a"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormDescription>
                        Leia as regras de validação acima antes de preencher o
                        campo.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <li>
                  Casais heterossexuais mais velhos que os filhos e com uma
                  quantidade ímpar de filhas mulheres.
                </li>
                <FormField
                  control={form.control}
                  name="q2b"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormDescription>
                        Leia as regras de validação acima antes de preencher o
                        campo.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <li>
                  Casais heterossexuais mais velhos que os filhos, com a filha
                  mais velha mulher e o filho mais novo homem.
                </li>
                <FormField
                  control={form.control}
                  name="q2c"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormDescription>
                        Leia as regras de validação acima antes de preencher o
                        campo.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <li>
                  Casais homossexuais mais velhos que os filhos, com pelo menos
                  seis filhos, em que os dois primeiros filhos formam um casal e
                  os últimos também.
                </li>
                <FormField
                  control={form.control}
                  name="q2d"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormDescription>
                        Leia as regras de validação acima antes de preencher o
                        campo.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <li>
                  Casais homossexuais mais velhos que os filhos, em que o sexo
                  dos filhos é alternado conforme a ordem de nascimento.
                </li>
                <FormField
                  control={form.control}
                  name="q2e"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormDescription>
                        Leia as regras de validação acima antes de preencher o
                        campo.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <li>
                  Casais homossexuais mais velhos que os filhos, com qualquer
                  quantidade de filhos homens e mulheres, mas que não tiveram
                  dois filhos homens consecutivos.
                </li>
                <FormField
                  control={form.control}
                  name="q2f"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormDescription>
                        Leia as regras de validação acima antes de preencher o
                        campo.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <li>
                  Arranjo de no mínimo x∈ℕ e no máximo y∈ℕ , com x&gt;0 , y&gt;0
                  , e x≤y , de adultos (Hs ou Ms) mais velhos que os filhos, com
                  qualquer quantidade de filhos homens e mulheres, mas que os
                  três filhos mais novos não foram homens.
                </li>
                <FormField
                  control={form.control}
                  name="q2g"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormDescription>
                        Leia as regras de validação acima antes de preencher o
                        campo.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </ol>
            </div>
          </div>
          <Button type="submit">Verificar Objeto</Button>
        </form>
      </Form>
    </main>
  )
}
