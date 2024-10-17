"use client"

import ServiceData from "../data/services.json"
import Content from "@/components/content";
import Image from "next/image"
import { FaCloud, FaGaugeHigh, FaGears, FaLaptopCode, FaSackDollar, FaScrewdriverWrench } from "react-icons/fa6";
import { useForm } from '@mantine/form';
import { Button, Container, Flex, Group, Textarea, TextInput } from "@mantine/core";
import Link from "next/link";

export default function Home() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      company: '',
      project: ''
    },
    validate: {
      firstName: (value) => value ? null : 'First Name required',
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  return (
    <>
      <div className="h-80 bg-[url('/bg.jpeg')] bg-no-repeat bg-center bg-cover bg-[rgba(0,0,0,0.3)] flex items-center p-8 justify-center" style={{backgroundBlendMode: 'darken'}}>
        <h2 className="text-2xl text-center font-bold text-white drop-shadow">I help businesses solve problems and achieve their goals through cloud, mobile, and web technologies.</h2>
      </div>
      <Content className="space-y-4 p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Services</h1>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {
            ServiceData.map((s, i) => (
              <Link key={`s-${i}`} href={s.url} className="flex flex-col items-center text-center">
                {
                  s.key == "app" ?
                  <FaLaptopCode className="size-16"/> :
                  s.key == "cloud" ?
                  <FaCloud className="size-16"/> :
                  s.key == "cost" ?
                  <FaSackDollar className="size-16" /> :
                  s.key == "performance" ?
                  <FaGaugeHigh className="size-16"/> :
                  s.key == "operation" ?
                  <FaGears className="size-16" /> :
                  s.key == "else" ?
                  <FaScrewdriverWrench className="size-16" /> :
                  <></>
                }
                <p>{s.name}</p>
              </Link>
            ))
          }
        </div>
      </Content>
      <div className="bg-blue-500 text-white w-full p-4">
        <Content>
          <div className="text-2xl font-bold text-center mb-4">Let's Get Stuffs Done.</div>
          <div className="px-12">
            <form>
              <Flex direction={{ base: 'column', sm: 'row' }} gap="md">
                <TextInput
                  withAsterisk
                  label="First Name"
                  className="grow"
                  key={form.key('firstName')}
                  {...form.getInputProps('firstName')} />
                <TextInput
                  withAsterisk
                  label="Last Name"
                  className="grow"
                  key={form.key('lastName')}
                  {...form.getInputProps('lastName')} />
              </Flex>
              <Flex direction={{ base: 'column', sm: 'row' }} gap="md" mt="md">
                <TextInput
                    withAsterisk
                    label="Email"
                    className="grow"
                    key={form.key('email')}
                    {...form.getInputProps('email')} />
                <TextInput
                    withAsterisk
                    label="Phone"
                    className="grow"
                    key={form.key('phone')}
                    {...form.getInputProps('phone')} />
              </Flex>
              <TextInput
                withAsterisk
                label="Company"
                key={form.key('company')}
                {...form.getInputProps('company')} mt="md"/>
              <Textarea
                withAsterisk
                label="Tell me about your project"
                autosize
                minRows={3}
                maxRows={5}
                resize="vertical"
                key={form.key('project')}
                {...form.getInputProps('project')} mt="md"/>
              <Group justify="flex-end" mt="md">
                <Button type="submit" w={{ base: '100%', sm:'auto' }} color="green">Submit</Button>
              </Group>
            </form>
          </div>
        </Content>
      </div>
      <Content className="flex justify-center py-8">
        <Image src="/opcc-member.png" className="w-40" alt="Overland Park Chamber of Commerce Member" width={160} height={87}/>
      </Content>
    </>
  );
}
