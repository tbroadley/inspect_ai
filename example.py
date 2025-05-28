import asyncio

import anyio

import inspect_ai.agent
import inspect_ai.log
import inspect_ai.solver
from inspect_ai import task
from inspect_ai.solver import solver


@solver
def sleep(seconds: int) -> inspect_ai.solver.Solver:
    async def solve(
        state: inspect_ai.solver.TaskState, generate: inspect_ai.solver.Generate
    ):
        await anyio.sleep(seconds)
        return state

    return solve


@solver
def setup() -> inspect_ai.solver.Solver:
    async def solve(
        state: inspect_ai.solver.TaskState, generate: inspect_ai.solver.Generate
    ):
        async def go():
            while True:
                # Could call sandbox() and run some code in a sandbox environment, then log the output:
                inspect_ai.log.transcript().info("Hello")
                await anyio.sleep(1)

        asyncio.create_task(go())
        return state

    return solve


@solver
def setup_sandbox_service() -> inspect_ai.solver.Solver:
    async def solve(
        state: inspect_ai.solver.TaskState, generate: inspect_ai.solver.Generate
    ):
        import inspect_ai.util._sandbox.service

        async def log(message: str):
            inspect_ai.log.transcript().info(message)

        asyncio.create_task(
            inspect_ai.util._sandbox.service.sandbox_service(
                name="task",
                methods=[log],
                until=lambda: False,
                sandbox=inspect_ai.util.sandbox(),
            )
        )
        return state

    return solve


@task
def task_with_background_loop():
    return inspect_ai.Task(setup=setup(), solver=sleep(seconds=5))


@task
def task_with_sandbox_service():
    return inspect_ai.Task(
        setup=setup_sandbox_service(), solver=sleep(seconds=10), sandbox="docker"
    )
