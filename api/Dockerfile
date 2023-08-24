FROM ruby:3.1.2
RUN apt-get update -qq 
WORKDIR /api
COPY . /api
COPY Gemfile /api/Gemfile
COPY Gemfile.lock /api/Gemfile.lock
RUN bundle install

EXPOSE $RAILS_PORT

CMD ["rails", "server", "-b", "0.0.0.0"]