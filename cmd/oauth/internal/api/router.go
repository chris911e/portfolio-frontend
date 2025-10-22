package api

import (
	"piffels/sqlc/oauthdb"
	"piffels/pkg/middleware"

	"github.com/gorilla/mux"

	"context"
)

func Router(queries *oauthdb.Queries, ctx context.Context) *mux.Router {
	h := NewHandler(queries, ctx)

	r := mux.NewRouter()

	r.Use(middleware.Logger)

	v1 := r.PathPrefix("/v1").Subrouter()

	// register routes
	v1.HandleFunc("/ping", h.HealthCheck).Methods("GET")
	v1.HandleFunc("/roles", h.ListRoles).Methods("GET")

	return r
}