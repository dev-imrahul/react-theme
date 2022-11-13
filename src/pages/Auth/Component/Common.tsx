import { Button, Container, Divider, Grid, Group, Paper, Text } from "@mantine/core";
import { upperFirst, useToggle } from "@mantine/hooks";
import { IconBrandGoogle, IconBrandTwitter } from "@tabler/icons";
import { FC, ReactNode } from "react";

interface CommonProps {
  children: ReactNode,
  type: "register" | 'login'
}

export default function Common ({children, type}: CommonProps ) {
  return (
    <>
      <Container my="md" size="xl">
        <Grid justify="center">
          <Grid.Col md={ 6 } lg={ 5 }>
            <Paper radius="md" p="xl" shadow="md" withBorder>
              <Text size="lg" weight={ 500 } align="center">
                {
                  type === 'login' ? upperFirst('Welcome back') : upperFirst('Join the family')
                }
              </Text>

              <Group grow mb="md" mt="md">
                <Button radius="xl" leftIcon={ <IconBrandGoogle /> } variant="outline" size="md">Google</Button>
                <Button radius="xl" leftIcon={ <IconBrandTwitter /> } variant="outline" size="md">Twitter</Button>
              </Group>

              <Divider label="Or continue with email" labelPosition="center" my="lg" />
              {children}
            </Paper>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  )
}