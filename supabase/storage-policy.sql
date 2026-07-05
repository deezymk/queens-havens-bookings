-- Run this AFTER creating the "inspo-images" bucket in the dashboard
-- (Storage > New bucket > name it exactly: inspo-images > toggle it Public).

-- Allow anyone visiting the site to upload an inspo photo into this bucket.
create policy "Public can upload inspo photos"
on storage.objects
for insert
to anon
with check (bucket_id = 'inspo-images');
