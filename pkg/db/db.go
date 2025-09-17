package db

import (
	"context"
	"fmt"
	"piffels/pkg/env"

	"github.com/jackc/pgx/v5"
)

func NewConnection(ctx context.Context, service env.Service) (*pgx.Conn, error) {
	// retrieve environment variables
	user := service.Value(env.DBUsername)
	password := service.Value(env.DBPassword)
	dbName := service.Value(env.DB)
	dbPort := service.Value(env.DBPort)

	// check for missing values
	if(user == "" || password == "" || dbName == "" || dbPort == "") {
		return nil, fmt.Errorf("database envrionment variable(s) missing of %s", service)
	}

	// create dsn for connection
	dsn := fmt.Sprintf(
		"host=localhost user=%s password=%s dbname=%s port=%s sslmode=disable",
		user, password, dbName, dbPort,
	)

	// connect to db
	conn, err := pgx.Connect(ctx, dsn)
	if err != nil {
		return nil, fmt.Errorf("unable to connect to database: %v", err)
	}

	// open db connection
	return conn, nil
}