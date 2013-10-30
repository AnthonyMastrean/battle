desc "Launch the website in your browser"
task :preview do
  system "explorer", "index.html"
end

desc "Synchronize the website with Github Pages"
task :deploy do |cmd|
  system "git checkout gh-pages"
  system "git merge master"
end
