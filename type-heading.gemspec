Gem::Specification.new do |s|
  # Release Specific Information
  s.version = "0.0.6"
  s.date = "2014-12-04"

  # Gem Details
  s.name = "type-heading"
  s.authors = ["Elliot Mitchum"]
  s.summary = %q{A responsive typography tool for headings}
  s.description = %q{A responsive typography tool for headings}
  s.email = "elliot@ellio7.com"
  s.homepage = "ellioseven.github.io/type-heading"

  # Gem Files
  s.files = %w(README.md)
  s.files += Dir.glob("lib/**/*.*")
  s.files += Dir.glob("stylesheets/**/*.*")
  s.files += Dir.glob("templates/**/*.*")

  # Gem Bookkeeping
  s.rubygems_version = %q{2.2.2}
  s.add_dependency("compass", [">= 1.0.1"])
end
