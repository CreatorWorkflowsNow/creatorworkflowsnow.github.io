# coding: utf-8

Gem::Specification.new do |spec|
    spec.name          = "creatorworkflowsnow"
    spec.version       = "0.1.0"
    spec.authors       = ["Dale Stubblefield"]
    spec.email         = ["dale.stubblefield@servicenow.com"]
  
    spec.summary       = %q{A collection of Creator Workflows Lab Guides.}
    spec.homepage      = "https://github.com/CreatorWorkflowsNow/CreatorWorkflowsNow.github.io"
    spec.metadata      = {
      "bug_tracker_uri"   => "https://github.com/CreatorWorkflowsNow/CreatorWorkflowsNow.github.io/issues",
      "changelog_uri"     => "https://github.com/CreatorWorkflowsNow/CreatorWorkflowsNow.github.io/blob/main/CHANGELOG.md",
      "documentation_uri" => "https://CreatorWorkflowsNow.github.io/CreatorWorkflowsNow.github.io/",
      "source_code_uri"   => "https://github.com/CreatorWorkflowsNow/CreatorWorkflowsNow.github.io",
    }
  
    spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r{^(assets|bin|_layouts|_includes|lib|Rakefile|_sass|LICENSE|README|CHANGELOG|favicon)}i) }
    spec.executables   << 'just-the-docs'
  
    spec.add_development_dependency "bundler", "~> 2.3.5"
    spec.add_runtime_dependency "jekyll", ">= 3.8.5"
    spec.add_runtime_dependency "jekyll-seo-tag", ">= 2.0"
    spec.add_runtime_dependency "rake", ">= 12.3.1"
  end
  