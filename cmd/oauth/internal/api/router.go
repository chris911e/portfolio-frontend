package api

import (
	"piffels/sqlc/oauthdb"
	"piffels/cmd/oauth/internal/middleware"

	"github.com/gorilla/mux"

	"context"
)

func Router(queries *oauthdb.Queries, ctx context.Context) *mux.Router {
	h := NewHandler(queries, ctx)

	// initialize API router
	r := mux.NewRouter()

	// use middleware
	r.Use(middleware.Logger)

	// create subrouter "v1" (versioning)
	v1 := r.PathPrefix("/v1").Subrouter()

	// register routes
	v1.HandleFunc("/ping", h.HealthCheck).Methods("GET")
	v1.HandleFunc("/roles", h.ListRoles).Methods("GET")

	return r
}