package env

import "os"

type Service string

type Key string

const (
	Oauth		Service = "OAUTH"
)

const (
	Env			Key = "ENV"
	APIPort    	Key = "API_PORT"
	DB         	Key = "DB"
	DBPort     	Key = "DB_PORT"
	DBUsername 	Key = "DB_USERNAME"
	DBPassword 	Key = "DB_PASSWORD"
)

func (service Service) Value(key Key) string {
	envVar := string(service) + "_" + string(key)
	if value, exists := os.LookupEnv(envVar); exists {
		return value
	}
	return ""
}