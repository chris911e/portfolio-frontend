package middleware

import(
	"net/http"
	"piffels/pkg/log"
)

func Logger(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// TODO: add external logging
		// TODO: add IP address (once deployed behind a proxy)

		// local log
		log.Info("Endpoint called", "Method", r.Method, "Path", r.URL.Path)
		next.ServeHTTP(w, r)
	})
}