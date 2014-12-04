base_directory  = File.expand_path(File.join(File.dirname(__FILE__), '..'))
type_heading_stylesheets_path = File.join(base_directory, 'stylesheets')
type_heading_templates_path = File.join(base_directory, 'templates')

if (defined? Compass)
  Compass::Frameworks.register('type-heading', :stylesheets_directory => type_heading_stylesheets_path, :templates_directory => type_heading_templates_path)
else
  # compass not found, register on the Sass path via the environment.
  if ENV.has_key?("SASS_PATH")
    ENV["SASS_PATH"] = ENV["SASS_PATH"] + File::PATH_SEPARATOR + type_heading_stylesheets_path
  else
    ENV["SASS_PATH"] = type_heading_stylesheets_path
  end
end