desc "Launch the website in your browser"
task :preview do
  system "explorer", "index.html"
end

desc "Synchronize the website with Github Pages"
task :deploy do |cmd|
  git checkout "gh-pages"
  git merge master
end
