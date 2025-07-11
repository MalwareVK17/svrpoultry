
-- Create a table to store contact form submissions
CREATE TABLE public.contact_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  read_status BOOLEAN NOT NULL DEFAULT false
);

-- Add Row Level Security (RLS) to the contact_messages table
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policy that allows anyone to INSERT contact messages (for the contact form)
CREATE POLICY "Anyone can submit contact messages" 
  ON public.contact_messages 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy that allows SELECT for admin access (no user authentication required)
-- This is a simple approach since you mentioned no authentication setup
CREATE POLICY "Allow read access to contact messages" 
  ON public.contact_messages 
  FOR SELECT 
  USING (true);

-- Create policy that allows UPDATE for marking messages as read
CREATE POLICY "Allow update of contact messages" 
  ON public.contact_messages 
  FOR UPDATE 
  USING (true);

-- Create policy that allows DELETE for admin to remove messages
CREATE POLICY "Allow delete of contact messages" 
  ON public.contact_messages 
  FOR DELETE 
  USING (true);

-- Create an index on created_at for better query performance
CREATE INDEX idx_contact_messages_created_at ON public.contact_messages (created_at DESC);

-- Create an index on read_status for filtering unread messages
CREATE INDEX idx_contact_messages_read_status ON public.contact_messages (read_status);
