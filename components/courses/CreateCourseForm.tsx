"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Tên khóa học phải có ít nhất 2 kí tự!"
  }),
  categoryId: z.string().min(1, {
    message: "Khóa học phải thuộc vào danh mục!"
  }),
  subCategoryId: z.string().min(1, {
    message: "Khóa học phải thuộc vào danh mục con!"
  }),
})

import React from 'react'
import { ComboBox } from "../custom/ComboBox"

interface CreateCourseFormProps {
  categories: {
    label: string // tên danh mục
    value: string //categoryId
    subCategories: {
      label: string, value: string
    }[]
  }[]
}

function CreateCourseForm({ categories }: CreateCourseFormProps) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      categoryId: "",
      subCategoryId: ""
    },
  })
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <div className="p-10">
      <h1 className="text-xl font-bold ">Hãy điền thông tin cơ bản cho khóa học của bạn</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-10">

          {/* Tên khóa học*/}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tên khóa học</FormLabel>
                <FormControl>
                  <Input placeholder="Ví dụ: Học đàn guitar cho người mới." {...field} />
                </FormControl>
              </FormItem>
            )}
          />


          {/* Chọn danh mục con */}
          <FormField
            control={form.control}
            name="categoryId"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Danh mục</FormLabel>
                <FormControl>
                  <ComboBox options={categories}  {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          {/* Chọn danh mục con */}
          <FormField
            control={form.control}
            name="subCategoryId"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Danh mục con</FormLabel>
                <FormControl>
                  {/* Tìm danh mục con chứa trong danh mục */}
                  <ComboBox options={categories.find((category) => category.value === form.watch("categoryId"))?.subCategories || []}  {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit">Xác nhận</Button>
        </form>
      </Form>
    </div>
  )
}

export default CreateCourseForm