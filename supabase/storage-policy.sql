
create policy "Public can upload inspo photos"
on storage.objects
for insert
to anon
with check (bucket_id = 'inspo-images');
