import { redirect } from '@tanstack/react-router'

import { supabase } from '@/integrations/supabase/client'

export async function requireAuth(redirectTo: string) {
  if (!supabase) {
    throw redirect({ to: '/auth/sign-in', search: { redirect: redirectTo } })
  }
  const { data } = await supabase.auth.getSession()
  if (!data.session) {
    throw redirect({ to: '/auth/sign-in', search: { redirect: redirectTo } })
  }
  return data.session
}
