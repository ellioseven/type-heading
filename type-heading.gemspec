Gem::Specification.new do |s|
  # Release Specific Information
  s.version = "0.0.12"
  s.date = "2015-03-23"

  # Gem Details
  s.name = "type-heading"
  s.authors = ["Elliot Mitchum"]
  s.summary = %q{A responsive typography tool.}
  s.description = %q{Type Heading is a lightweight Compass Extension that lets you easily manage responsive typographic sizing.}
  s.email = "elliot@ellio7.com"
  s.homepage = "http://ellioseven.github.io/type-heading"
  s.license = "MIT"

  # Gem Files
  s.files = %w(README.md)
  s.files += Dir.glob("lib/**/*.*")
  s.files += Dir.glob("stylesheets/**/*.*")
  s.files += Dir.glob("templates/**/*.*")

  # Gem Bookkeeping
  s.rubygems_version = %q{2.2.2}
  s.add_runtime_dependency('sass', '~> 3.3', '>= 3.3.13')
  s.add_runtime_dependency('compass', '~> 1.0', '>= 1.0.1')

end