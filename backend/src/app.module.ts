import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { UsersModule } from './users/users.module';
// import { ExpensesModule } from './expenses/expenses.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault],
      installSubscriptionHandlers: true,
      autoSchemaFile: true,
    }),
    UsersModule,
    // ExpensesModule,
  ],
})
export class AppModule {}
