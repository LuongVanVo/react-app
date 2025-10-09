"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

import { Button } from "@/shared/ui/button/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form/form"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/shared/ui/input-otp/input-otp"
import type { ApiError } from "../api/type"
import { useAuth } from "../model/useAuth"

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
})

export function InputOTPForm() {
  const { verifyOTP, isLoading } = useAuth();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      // Sử dụng email từ localStorage hoặc hardcode tạm thời
      const email = localStorage.getItem('registerEmail') || 'user@example.com';
      await verifyOTP({ email: email, code: data.pin });
      toast.success("OTP verified successfully!");
    } catch (err) {
      const apiError = err as ApiError;
      toast.error(apiError.message || "Verification failed");
    }
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center p-6">
      <div className="w-full max-w-sm">
        {/* Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* OTP Field */}
            <FormField
              control={form.control}
              name="pin"
              render={({ field }) => (
                <FormItem className="space-y-4">
                  <FormLabel className="text-white text-base font-normal">
                    One-Time Password
                  </FormLabel>
                  <FormControl>
                    <div className="flex justify-start">
                      <InputOTP maxLength={6} {...field}>
                        <InputOTPGroup className="gap-2">
                          <InputOTPSlot 
                            index={0} 
                            className="w-10 h-10 border border-gray-600 bg-transparent text-white text-base rounded-md focus:border-gray-400 focus:ring-0" 
                          />
                          <InputOTPSlot 
                            index={1} 
                            className="w-10 h-10 border border-gray-600 bg-transparent text-white text-base rounded-md focus:border-gray-400 focus:ring-0" 
                          />
                          <InputOTPSlot 
                            index={2} 
                            className="w-10 h-10 border border-gray-600 bg-transparent text-white text-base rounded-md focus:border-gray-400 focus:ring-0" 
                          />
                          <InputOTPSlot 
                            index={3} 
                            className="w-10 h-10 border border-gray-600 bg-transparent text-white text-base rounded-md focus:border-gray-400 focus:ring-0" 
                          />
                          <InputOTPSlot 
                            index={4} 
                            className="w-10 h-10 border border-gray-600 bg-transparent text-white text-base rounded-md focus:border-gray-400 focus:ring-0" 
                          />
                          <InputOTPSlot 
                            index={5} 
                            className="w-10 h-10 border border-gray-600 bg-transparent text-white text-base rounded-md focus:border-gray-400 focus:ring-0" 
                          />
                        </InputOTPGroup>
                      </InputOTP>
                    </div>
                  </FormControl>
                  <FormDescription className="text-gray-400 text-sm">
                    Please enter the one-time password sent to your phone.
                  </FormDescription>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            <div className="pt-2">
              <Button 
                type="submit" 
                className="bg-white text-black hover:bg-gray-100 font-normal px-6 py-2 text-sm rounded-md"
                disabled={isLoading || form.watch("pin").length !== 6}
              >
                {isLoading ? "Submitting..." : "Submit"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}