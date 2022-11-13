import { upperFirst } from '@mantine/hooks';

import {
  TextInput,
  PasswordInput,
  Group,
  Button,
  Anchor,
  Stack,
} from '@mantine/core';
import { useLocation, useNavigate } from "react-router-dom";
import Common from '../Component/Common';
import { useForm } from 'react-hook-form';
import ForgotPassword from './ForgotPassword';
import { useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';

export default function AuthenticationForm() {
  const navigate = useNavigate();
  const { login }  = useAuth();
  const { state } = useLocation();

  const {register, handleSubmit, formState: {errors}} = useForm({
    mode: 'all',
    reValidateMode: 'onChange',
    defaultValues: {
      email: '',
      password: ''
    }
  });
  const [opened, setOpened] = useState(false);
  return (
    <Common type="login">
      <form onSubmit={handleSubmit((data) => {

          if(login) {
            login(data);
            navigate(state?.path || "/");
          }
      })}>
        <Stack>
          <TextInput
            size="md"
            label="Email"
            placeholder="Your email"
            {...register('email', {
              required: 'Please enter your email',

            })}
            error={errors.email && errors.email.message}
          />

          <PasswordInput
            size="md"
            label="Password"
            placeholder="Your password"
            {...register('password', {
              required: 'Please enter your password',

            })}
            error={errors.password && errors.password.message}
          />
        </Stack>
        <Group position="right" mt="lg">
          <Anchor component="button" size="md" onClick={() => setOpened(true)}>
            Forgot password?
          </Anchor>
        </Group>
        <Group position="apart" mt="xl">
          <Anchor
            component="button"
            type="button"
            color="dimmed"
            onClick={() => {
              navigate("/register")
            }}
            size="xs"
          >
            Already have an account? Register
          </Anchor>
          <Button type="submit">{upperFirst('login')}</Button>
        </Group>
      </form>
      <ForgotPassword opened={opened} setOpened={setOpened} />
    </Common>
  );
}