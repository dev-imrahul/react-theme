import { Anchor, Button, Checkbox, Group, PasswordInput, Stack, TextInput } from '@mantine/core';
import { upperFirst } from '@mantine/hooks';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Common from '../Component/Common';
import { useForm } from 'react-hook-form';

interface HomePageProps {}

const Register: FC<HomePageProps> = () => {
  const {register, handleSubmit, formState: {errors}} = useForm({
    mode: 'all',
    reValidateMode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
      name: '',
      terms: true
    }
  });

  const navigate = useNavigate();

  return (
    <div data-testid="HomePage">
      <Common type="register">
      <form onSubmit={handleSubmit((data) => {
          console.log(data)
        })}>
          <Stack>
            <TextInput
              size="md"
              label="Name"
              placeholder="Your name"
              {...register('name', {
                required: 'Name field required',
  
              })}
              error={errors.name && errors.name.message}
            />

            <TextInput
              size="md"
              label="Email"
              placeholder="hello@rahul.dev"
              {...register('email', {
                required: 'Email field required',
  
              })}
              error={errors.email && errors.email.message}
            />

            <PasswordInput
              size="md"
              label="Password"
              placeholder="Your password"
              {...register('password', {
                required: 'Password field required',
              })}
              error={errors.password && errors.password.message}
            />
            <Checkbox
              label="I accept terms and conditions"
              // checked={values.terms}
              {...register('terms', {
                required: 'Please check before submit',
              })}
              error={errors.terms && errors.terms.message}
            />
          </Stack>

          <Group position="apart" mt="xl">
            <Anchor
              component="button"
              type="button"
              color="dimmed"
              onClick={() => {
                navigate("/login")
              }}
              size="xs"
            >
              already have an account? Login
            </Anchor>
            <Button type="submit">{upperFirst('Register')}</Button>
          </Group>
        </form>
      </Common>
    </div>

  )
}


export default Register;
