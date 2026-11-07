-- AccountPro Growth Circle — Supabase SQL
-- Run this in: Supabase Dashboard > SQL Editor > New Query

-- Create the enquiries table
CREATE TABLE IF NOT EXISTS public.enquiries (
  id              BIGSERIAL PRIMARY KEY,
  name            TEXT        NOT NULL,
  email           TEXT,
  phone           TEXT,
  service_interest TEXT,
  message         TEXT        NOT NULL,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Enable Row Level Security (required when using anon key in frontend)
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;

-- Policy: allow anyone (including anonymous visitors) to INSERT only
CREATE POLICY "Allow public insert" ON public.enquiries
  FOR INSERT
  WITH CHECK (true);

-- Policy: only authenticated users (you, via Dashboard) can SELECT
CREATE POLICY "Allow authenticated select" ON public.enquiries
  FOR SELECT
  USING (auth.role() = 'authenticated');

