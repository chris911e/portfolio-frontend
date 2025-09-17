package main

import (
	"piffels/cmd/oauth/internal/api"
	"piffels/pkg/db"
	"piffels/pkg/env"
	"piffels/pkg/log"
	"piffels/sqlc/oauthdb"

	"context"
	"fmt"
	"net/http"
	"time"
)

func main() {
	// create background context
	ctx := context.Background()

	// connect to db
	conn, err := db.NewConnection(ctx, env.Oauth)
	if err != nil {
		log.Error("Could not connect to database", "error", err)
		return
	}
	log.Info("Connected to database")
	defer conn.Close(ctx)

	// bind handlers with db queries
	queries := oauthdb.New(conn)
	router := api.Router(queries, ctx)

	srv := &http.Server{
		Handler:      router,
		Addr:         fmt.Sprintf(":%s", env.Oauth.Value(env.APIPort)),
		WriteTimeout: 15 * time.Second,
		ReadTimeout:  15 * time.Second,
	}

	log.Info("Started oAuth server on :5000")
	err = srv.ListenAndServe()
	if err != nil {
		log.Error("Server error", "error", err)
		return
	}
}
