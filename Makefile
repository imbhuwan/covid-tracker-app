 SENTRY_AUTH_TOKEN=0dadc771251f4ed196ac0888c0cdb2aa93c71e89169b4f55b9fe46e0c38d245e
 SENTRY_ORG=signy-fi
 SENTRY_PROJECT=covid-tracker-app

REACT_APP_RELEASE_VERSION=`sentry-cli releases propose-version`
setup_release: create_release upload_sourcemaps create_release:
    sentry-cli releases -o $(SENTRY_ORG) new -p $(SENTRY_PROJECT) $(REACT_APP_RELEASE_VERSION)

upload_sourcemaps:
    sentry-cli releases -o $(SENTRY_ORG) -p $(SENTRY_PROJECT) files $(REACT_APP_RELEASE_VERSION) \
        upload-sourcemaps --url-prefix "~/static/js" --validate build/static/js