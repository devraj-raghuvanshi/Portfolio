"use client"
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { HeadingDivider, Loader } from "components";
import Error from "../error";
import { Projects } from "./components/Projects";

export default function Page({ projects }) {

  return (
    <div className="container-md">
      <section id="projects" className="section">
        <HeadingDivider title="Relevant projects" />
        <Suspense
          fallback={
            <div className="flex-center">
              <Loader />
            </div>
          }
        >
          <ErrorBoundary FallbackComponent={Error}>
            <div>
              ABCD
            </div>
            <Projects projects={projects} />
          </ErrorBoundary>
        </Suspense>
      </section>
    </div>
  );
}
